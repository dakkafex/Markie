'use strict'
const User = use('App/Model/User')
const Item = use('App/Model/Item')

class MarketController {

    * newItem(request, response) {
        const postData = request._body;
        console.log(postData);

        yield Item.create(postData);
        yield response.sendView('newConfirm')
        return
    }

    * allItem(request, response) {
        const items = yield Item.all()

        yield response.sendView('itemIndex', { items: items.toJSON() })
    }

    * singleItem(request, response) {
        const id = request.param('id')
        const item = yield Item.findBy('id', id)

        yield response.sendView('itemDetail', { item: item.toJSON() })
        return
    }

    * updateItem(request, response) {
        const id = request.param('id')
        const item = yield Item.findBy('id', id)
        const postData = request.only('sold', 'gifted', 'discarded')

        const soldInt = parseInt(postData.sold)
        const giftInt = parseInt(postData.gifted)
        const discInt = parseInt(postData.discarded)

        const data = {
            sold: item.sold + soldInt,
            gifted: item.gifted + giftInt,
            discarded: item.discarded + discInt,
            stock: item.stock - 1
        }

        item.fill(data)
        yield item.save()
    }

}

module.exports = MarketController
