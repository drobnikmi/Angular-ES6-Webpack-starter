describe('test module', ()=>{
    describe('test controller', ()=>{
      it('should return text value', ()=>{
        module('myApp');
  
        let ctrl;
  
        inject(function($controller){
          ctrl = $controller('firstController');
        });
  
        
        expect(ctrl).toBeDefined();
        expect(ctrl.test).toBe('test');
      });
    });
  })