function getFirstSelector(selector) {
	return document.querySelector(selector);
}

function nestedTarget() {
	//return document.getElementById('nested').getElementsByClassName('target')[0];
	return document.querySelector('#nested .target')

}

function increaseRankBy(n) {
	const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
	for (let i = 0; i < lis.length; i++) {
  		lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n).toString();
	}
}

// function deepestChild() {
//   let node = document.getElementById('grand-node')
//   let nextNode = node.children[0]

//   while (nextNode) {
//     node = nextNode
//     nextNode = node.children[0]
//   }

//   return node
// }

function deepestChild() {
	const nodes = document.querySelectorAll('div#grand-node')[0];
	return nodes.querySelectorAll('div')[nodes.querySelectorAll('div').length - 1];
}