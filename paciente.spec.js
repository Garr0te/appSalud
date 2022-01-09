const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should();

const Paciente = require('./paciente.js');

describe ('Paciente', function(){
    it('appsalud hauria de tornar ok', function(){
        assert.equal(Paciente(), 'ok');
    })
})