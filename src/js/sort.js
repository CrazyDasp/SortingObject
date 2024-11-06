export function sortObj(obj, keys) {
    let all_props = []
    let sort_props = []
    let result = []
    
    for (const prop in obj) {
      if (keys.includes(prop)) {
        all_props.push(prop)
      } else {
        sort_props.push(prop)
      }
    }
  
    all_props = all_props.concat(sort_props.sort())
  
    for (const prop in all_props) {
        let temp_obj = new Object ()
        temp_obj.key = all_props[prop]
        temp_obj.value = obj[all_props[prop]]
        result.push(temp_obj)
    }
  
    return result
}

const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}


console.log(sortObj(obj, ["name", "level"]))

