fx_version 'bodacious'
game 'gta5'
lua54 'yes'

author 'ensboi'
description 'eth-karambit-case'

ui_page 'ui/index.html'

files {
    'ui/*',
    'ui/img/*',
    'ui/item-icons/*',
}

client_scripts {
    "client.lua"
}

server_scripts {
    "server.lua"
}

escrow_ignore {
    'server.lua'
}