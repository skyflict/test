class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  toArray() {
    const result = [];
    function traverse(node) {
      if (node) {
        traverse(node.left);
        result.push(node.value);
        traverse(node.right);
      }
    }
    traverse(this.root);
    return result;
  }
}
const tree = new BinaryTree();
const count = 10;
const min = -100;
const max = 100;

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    tree.insert(randomNumber);
    console.log(tree.toArray());
  }
});
