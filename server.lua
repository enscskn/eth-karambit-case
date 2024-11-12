local QBCore = exports['qb-core']:GetCoreObject()

QBCore.Functions.CreateUseableItem('karambitcase', function(src)
    TriggerClientEvent("eth:openCase", src)
end)

RegisterNetEvent('eth-karambit-case:giveItem', function(data)
    local Player = QBCore.Functions.GetPlayer(source)
    if Player ~= nil then
        Player.Functions.AddItem(data.itemid, 1)
        TriggerClientEvent('inventory:client:ItemBox', source, QBCore.Shared.Items['dagger_karambitfinish'], "add")
    end
end)