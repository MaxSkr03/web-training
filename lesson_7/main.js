var HtmlObject = function (content, element){
    this.content = content;
    this.element = element;
}

HtmlObject.prototype.Render = function (container) {
    if (this.element != null) {
        var newElement = document.createElement(this.element);
        container.append(newElement);
        container = newElement;
    }
    if (this.content instanceof Array) {
        for (var i = 0; i < this.content.length; i++){
            this.content[i].Render(container);
        }
    }
    else if (this.content instanceof HtmlObject) {
        this.content.Render(container);
    }
    else
        container.append(this.content);
}

var SpanObject = function (content){
    HtmlObject.call(this, content, 'span')
}

var DivObject = function (content) {
    HtmlObject.call(this, content, 'div');
}

var TableObject = function (content){
    HtmlObject.call(this, content, 'table')
}

var TrObject = function (content) {
    HtmlObject.call(this, content, 'tr');
}

var TdObject = function (content) {
    HtmlObject.call(this, content, 'td');
}

DivObject.prototype = Object.create(HtmlObject.prototype);
SpanObject.prototype = Object.create(HtmlObject.prototype);
TableObject.prototype = Object.create(HtmlObject.prototype);
TrObject.prototype = Object.create(HtmlObject.prototype);
TdObject.prototype = Object.create(HtmlObject.prototype);

var skRepeat = document.querySelector('[sk-repeat]');
var skRepeatCount = parseInt(skRepeat.getAttribute('sk-repeat'));

var trs = [];
for (var i = 0; i < skRepeatCount; i++) {
    trs.push(new TrObject(
        new TdObject(i)
    ))
}

var table = new TableObject(trs);

table.Render(skRepeat);
