var _ = require('lodash');
let employees = {
    "Tom": {
        "id": 9,
        "age": 25,
        "department": "dev",
        "role": ['programmer', 'manager', 'master']
    },
    "Janny": {
        "id": 10,
        "age": 24,
        "department": "dev",
        "role": ['programmer']
    },
    "Jan": {
        "id": 11,
        "age": 26,
        "department": "dev",
        "role": ['manager', 'master']
    }
}

function path_getValue_get_and_at() {
    let msg = employees;
    _.get(msg, 'Tom.role[1]', null)
    // ==> 'manager'
    _.at(msg, ['Tom.id', 'Janny.id', 'Jan.id'])
    // ==>  [9,10, 11,]

    return {
        getRes: _.get(msg, 'Tom.role[1]', null),
        at: _.at(msg, ['Tom.id', 'Janny.id', 'Jan.id'])
    }

}

function updateValue_set_setWith_update_updateWith() {
    let msg = employees;
    //https://www.lodashjs.com/docs/lodash.set
    _.set(msg, 'Tom.age', 23);
    _.set(msg, ['Tom', 'id'], 1);
    //https://www.lodashjs.com/docs/lodash.setWith
    //setWith需要深入学习
    //https://www.lodashjs.com/docs/lodash.update
    _.update(msg, 'Janny.role', (roleList) => {
        roleList.push("manager")
        return roleList;
    })
    //https://www.lodashjs.com/docs/lodash.updateWith
    //updateWith需要深入学习
    return msg;
}

function removeValue_unset() {
    let msg = employees;
    //https://www.lodashjs.com/docs/lodash.unset
    _.unset(msg, 'Tom.role')
    return msg;
}

function validValue_has() {
    let msg = employees;
    return {
        'Tom.role': _.has(msg, 'Tom.role'),
        'Tom.id': _.has(msg, 'Tom.id'),
        'Tom.department': _.has(msg, 'Tom.department')
    }
}


module.exports = {
    path_getValue_get_and_at,
    updateValue_set_setWith_update_updateWith,
    removeValue_unset,
    validValue_has
}
