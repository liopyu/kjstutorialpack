execute as @e[type=item_frame,nbt={Invisible:1b},distance=..32] unless data entity @s Item run function port_city:maybe_fill
