local QBCore = exports['qb-core']:GetCoreObject()

function openCase()
    SetNuiFocus(true, true)
    SendNUIMessage({show = true})
    TriggerScreenblurFadeIn(300.0)
end

function caseResult (data)
  SetNuiFocus(false, false)
  SendNUIMessage({show = false})
  TriggerScreenblurFadeOut(300.0)
  QBCore.Functions.Notify('You won '..data.itemname..'!', 'success')
  TriggerServerEvent("qb-smallresources:server:RemoveItem", "karambitcase", 1)
  TriggerEvent("inventory:client:ItemBox", QBCore.Shared.Items["karambitcase"], "remove", 1)
  TriggerServerEvent("eth-karambit-case:giveItem", data)
  end

RegisterNUICallback('caseResult', caseResult )

RegisterNUICallback('CloseUIForce', function()
    SetNuiFocus(false, false)
    SendNUIMessage({show = false})
    TriggerScreenblurFadeOut(300.0)
end)

RegisterNetEvent("eth:openCase")
AddEventHandler("eth:openCase", function()
  OpenCase()
end)