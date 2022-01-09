const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should();

const Bascula = require('./bascula');

 
 /*   describe ('Bascula', function(){
        it('appsalud hauria de tornar ok', function(){
            assert.equal(Bascula(), 'ok');
        })
    });
*/

    describe('Main Suite -- Pruebas Unitarias Clase Bascula', function(){
    
        describe('Constructor Báscula -- Test Case 1',function(){
            let objetoPrueba = new Bascula();
            it ('obtenerNumeroAnotaciones() == 0', function(){
                
            });
        });

        describe('Constructor Báscula -- Test Case 2',function(){
            let objetoPrueba = new Bascula();
            it ('obtenerNumeroAnotaciones() == 0', function(){
                expect (objetoPrueba.obtenerNumeroAnotaciones()).to.be.equal();         
            });
              
            it ('obtenerPesoMaximo() == 0', function(){
                expect (objetoPrueba.obtenerPesoMaximo(), 'El peso maximo esperado es cero').to.be.equal(0);      
            });
            it ('anotarPeso(65)', function(){
                objetoPrueba.anotarPeso(65);
            });

              
            
            
        });

        describe('Clase Báscula -- Test Case 3',function(){
            let objetoPrueba = new Bascula();


            it ('obtenerPesoMinimo() == 0', function(){
                (objetoPrueba.obtenerPesoMinimo(), 'El peso minimo esperado es cero').should.to.be.equal(0);
            });
             
            it ('CalcularIMC()', function(){
    
                expect (objetoPrueba.calcularIMC(),'El peso máximo esperado es 90').to.be.equal(91);
            });

            it ('describirIMC()is.String()', function(){
                assert.isString(objetoPrueba.describirIMC());

            });
        });  
        

    });    