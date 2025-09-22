tag @s remove picked
execute if predicate port_city:w_ss run function port_city:pick_ss
execute unless entity @s[tag=picked] if predicate port_city:w_s run function port_city:pick_s
execute unless entity @s[tag=picked] if predicate port_city:w_a run function port_city:pick_a
execute unless entity @s[tag=picked] if predicate port_city:w_b run function port_city:pick_b
execute unless entity @s[tag=picked] if predicate port_city:w_c run function port_city:pick_c
execute unless entity @s[tag=picked] if predicate port_city:w_d run function port_city:pick_d
execute unless entity @s[tag=picked] run function port_city:pick_f
tag @s remove picked