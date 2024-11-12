const audio = document.getElementById("myAudio");

document.addEventListener('DOMContentLoaded', () => {
    document.body.style.display = 'none';
    document.querySelector('.raffle-roller-holder').style.display = 'none';
    window.addEventListener('message', (event) => {
    if (event.data.show) {
        document.body.style.display = 'flex';
        document.querySelector('.raffle-roller-holder').style.display = 'block';
    }
    });
});

function playAudio() {
    audio.play();
}

function pauseAudio() {
    audio.pause();
}

function generate(ng) {
    setTimeout(playAudio, 500);
    document.querySelector('button').remove();
    document.querySelector('.raffle-roller-holder').classList.add('line');
    document.querySelector('.raffle-roller-container').style.cssText = 'transition: all 8s cubic-bezier(0.08, 0.6, 0, 1); margin-left: 0px;';
    document.querySelector('.raffle-roller-container').innerHTML = '';

  const itemChance = Math.floor(Math.random() * 100) + 1;
    let level;
    if (itemChance < 35) {
        level = 1;
    } else if (itemChance < 60) {
        level = 2;
    } else if (itemChance < 80) {
        level = 3;
    } else if (itemChance < 95) {
        level = 4;
    } else {
        level = 5;
    }

    let element = startItems;
    for (let i = 0; i < 101; i++) {
    const randed = Math.floor(Math.random() * 500) + 1;
    if (randed < 35 * 5) {
      element += `<div class="item-common rare-level-1"><div id="CardNumber${i}" class="item class_red_item" style="background-image:url(${itemList[1][Math.floor(Math.random() * itemList[1].length)].img});"></div></div>`;
    } else if (randed < 60 * 5) {
      element += `<div class="item-common rare-level-2"><div id="CardNumber${i}" class="item class_red_item" style="background-image:url(${itemList[2][Math.floor(Math.random() * itemList[2].length)].img});"></div></div>`;
    } else if (randed < 80 * 5) {
      element += `<div class="item-common rare-level-3"><div id="CardNumber${i}" class="item class_red_item" style="background-image:url(${itemList[3][Math.floor(Math.random() * itemList[3].length)].img});"></div></div>`;
    } else if (randed <= 95 * 5) {
      element += `<div class="item-common rare-level-4"><div id="CardNumber${i}" class="item class_red_item" style="background-image:url(${itemList[4][Math.floor(Math.random() * itemList[4].length)].img});"></div></div>`;
    } else {
      element += `<div class="item-common rare-level-5"><div id="CardNumber${i}" class="item class_red_item" style="background-image:url(${itemList[5][Math.floor(Math.random() * itemList[5].length)].img});"></div></div>`;
    }
    }

    document.querySelector('.raffle-roller-container').innerHTML = element;

    setTimeout(() => {
        const itemListRandom = Math.floor(Math.random() * itemList[level].length);
        goRoll(itemList[level][itemListRandom].name, itemList[level][itemListRandom].img, level, itemList[level][itemListRandom].itemid);
        // console.log(itemList[level][itemListRandom].itemid, level)
        // $.post('http://eth-karambit-case/caseResult', JSON.stringify({
        //     item: itemList[level][itemListRandom].itemid
        // }));
        // location.reload();
    }, 500);
}

function goRoll(skin, skinimg, skinlvl, itemid) {
    document.querySelector('.raffle-roller-container').style.cssText = 'transition: all 8s cubic-bezier(0.08, 0.6, 0, 1);';
    document.getElementById('CardNumber31').style.backgroundImage = `url(${skinimg})`;
    document.getElementById('CardNumber31').parentElement.className = `item-common rare-level-${skinlvl}`;

    setTimeout(() => {
        document.getElementById('CardNumber31').classList.add('winning-item');
        document.getElementById('rolled').textContent = skin;
        document.querySelector('.raffle-roller-holder').style.display = 'none';
        document.body.style.display = 'none';
        $.post('https://eth-karambit-case/caseResult', JSON.stringify({
            itemid: itemid,
            itemname: skin
        }));
        console.log(itemid, skin);
    }, 8500);

    setTimeout(() => {
        location.reload();
    }, 9000);

    document.querySelector('.raffle-roller-container').style.marginLeft = '-6870px';
}

document.onkeydown = (data) => {
    if (data.which === 27) {
        document.body.style.display = 'none';
        $.post('http://eth-karambit-case/CloseUIForce', JSON.stringify({}));
        setTimeout(() => {
        location.reload();
    }, 400);
    }
};