execute store result storage port_city:state daytime int 1 run time query daytime
execute if data storage port_city:state {daytime:6000} unless data storage port_city:state {lastday:0b} run function port_city:refresh_board
execute if data storage port_city:state {daytime:6000} run data modify storage port_city:state lastday set value 0
execute unless data storage port_city:state {daytime:6000} run data modify storage port_city:state lastday set value 1
