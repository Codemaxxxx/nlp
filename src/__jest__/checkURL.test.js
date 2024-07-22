const { myValidURL } = require("../client/js/checkURL")

describe('urlValidity', () => {
    test('test if stings are false urls', () => {
        expect(myValidURL("read")).toBeFalsy();
    })

    test('emails are not considered valid urls', () => {
        expect(myValidURL("mailto: deramartinswill@gmail.com")).toBeFalsy();
    })

    test('expect urls to be true', () => {
        expect(myValidURL("https://www.google.com")).toBeTruthy();
    })

    test('expect empty string to be falsy', () => {
        expect(myValidURL("")).toBeFalsy;
    })
})