"use strict";

describe("1-module-3-task", function() {

    it('1, -5.8 или 10, хотя 34 + -5.3 и 73', function () {
       expect(getMinMax('1, -5.8 или 10, хотя 34 + -5.3 и 73')).toEqual({min: -5.8, max: 73 });
    });

    it('25,-1,-234,4,   1000', function () {
        expect(getMinMax('25,-1,-234,4,   1000')).toEqual({min: -234, max: 1000 });
    });

});
