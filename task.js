"use strict"
function Obj() {

    this.createTag = function () {
        const tag = document.createElement('span')
        document.body.append(tag)
    }

    this.getTag = function () {
        document.querySelector('span');
    }

    this.setAttribut = function () {
        const input = document.createElement('input')
        input.setAttribute('type', 'text')
        document.body.append(input)
    }

    this.addContent = function () {
        const value = document.querySelector('span');
        value.innerHTML = prompt('введи свой текст')
    }
    this.searchClass = function () {
        const div = document.querySelector('.class')
    }
    this.addClass = function () {
        const setClass = document.querySelector('span')
        setClass.classList.add('paragraph')
    }
    this.removeClass = function () {
        const removeClass = document.querySelector('span')
        removeClass.classList.remove('paragraph')
    }

    this.toggleClass = function () {
        const getTag = document.querySelector('span')
        getTag.classList.toggle('newStyle');

    }
    this.hasClass = function () {
        const hasclas = document.querySelector('span')
        if (hasclas.classList.contains === true)
            return true
        else return false
    }
    this.appendEl = function () {
        const element = document.querySelector('div')
        const img = document.createElement('img')
        const message = confirm('Добавить картинку внутрь тега div?')
        if (message === true) {
            element.append(img)
        }
        else {
            element.before(img)
        }
    }


}

let obj = new Obj();
console.log(obj)
obj.createTag();
obj.getTag();
obj.setAttribut();
obj.addContent();
obj.searchClass();
obj.addClass();
obj.removeClass();
obj.toggleClass();
obj.appendEl();