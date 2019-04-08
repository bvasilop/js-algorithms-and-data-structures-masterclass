# Data Structures: Trees

![Trees](./Trees.png?raw=true "Trees")

* Trees are data structures that have a hierarchical structure as opposed to something like linked lists or arrays which are linear.
* Trees can have zero or more child nodes.
* A tree usually starts with a single root node or a parent node and every child of the tree descends from this root node.
* It's kind of like an inverse tree.
* Every child of a node descends from only one parent.
* You have a parent-child relationship that is uni-directional. That is, it's going one way.
* You also have leaf notes which are the very end of a tree data structure.
* Within a tree you can have sub trees such as the area circled in red.
* We use the same principle as we did in linked lists. We have nodes and these nodes can contain any type of information that we want.
* Link list is technically a type of tree but with just one single path and it's linear.
* A node can only point to a child as you can see all the arrows point down.
* There's always one entry point which is the root but nodes don't really have to reference their parent.
* [Trees Data Structures Wiki](https://en.wikipedia.org/wiki/List_of_data_structures)
* [Abstract Syntax Tree Wiki](https://en.wikipedia.org/wiki/Abstract_syntax_tree)

## Binary Trees

![BinaryTrees](./Binary-Trees.png?raw=true "Binary-Trees")

* Binary search trees are very good at searching and great for comparing things.
* Each node can only have either 0, 1, or 2 nodes and each child can only have one parent.
* Each node represents a certain state.

```javascript
function BinaryTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
```