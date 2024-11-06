import { sortObj } from "../sort";

test("Testing sort object with includes parameters", () => {
    const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}

    const param = ["name", "level"]

    const result = [
        {key: "name", value: "мечник"},
        {key: "level", value: 2},
        {key: "attack", value: 80},
        {key: "defence", value: 40},
        {key: "health", value: 10}
      ]

    expect(sortObj(obj, param)).toEqual(result)
})