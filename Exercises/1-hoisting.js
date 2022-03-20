'use strict';

const fn = () => {
    console.log(hoisted);
    var hoisted = 'Hoisting of var example';
};

module.exports = { fn };
