var data_structure = 0; //Stack = 1, Queue = 2, Linked list = 3, Binary Search Tree = 4
var top_X = 320;    //Global variable that tracks the top's x value
const top_Y = 350;  //Global constant variable that tracks the top's y value
var stack = [];     //Array that tracks the stack
var queue = [];     //Array that tracks the queue
var top_index = stack.length-1;   //Global variable that tracks the top's index
var front_index = queue.length-1; //Global variable that tracks the front's index

function dropdown_buttons() {
  document.getElementById("dropdown-menu").classList.toggle("show");
}

function move_to_main() {
  document.getElementById("landing-page").style.display = "none";
  document.getElementById("visualizer-navbar").style.display = "block";
}

window.onclick = function(event) {
  //When the dropdown bar is open, the user clicks outside of it
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        //The bar is hidden
      }
    }
  }
}

function moveToStack() {
  //Stack page is shown
  document.getElementById("stack-page").style.display = "block";
  document.getElementById("queue-page").style.display = "none";
  document.getElementById("bst-page").style.display = "none";
  data_structure = 1;
  stackTable();
  startStackTable();
}

function moveToQueue(){
  //Queue page is shown
  document.getElementById("queue-page").style.display = "block";
  document.getElementById("stack-page").style.display = "none";
  document.getElementById("bst-page").style.display = "none";
  data_structure = 2;
  queueTable();
  startQueueTable();
}

function moveToBST()
{
  //BST Page is shown
  document.getElementById("stack-page").style.display = "none";
  document.getElementById("queue-page").style.display = "none";
  document.getElementById("bst-page").style.display = "block";
  data_structure = 4;
}

//Provides user of information regarding the current data structure
function data_info(data_structure) {
  if(data_structure==1)
  {
    alert('A stack is a data structure that acts as a collection of elements. Push adds an element to the top of the stack.' +
    ' Pop removes the element at the top of the stack. Peek allows the user to see the value of the top element.' +
    ' Rectangles are drawn to represent each element in a stack. Push adds a rectangle with a value, pop removes a rectangle,' +
    ' and peek alerts the value of the top element. The top element is the most right rectangle.');
  }
  else if(data_structure==2)
  {
    alert('A queue is a data structure that acts as a collection of elements. enqueue adds an element to the back of the queue.' +
    ' dequeue removes the element at the front of the queue. Peek front allows the user to see the value of the front element.' +
    ' Rectangles are drawn to represent each element in a queue. Enqueue adds a rectangle with a value, dequeue removes a rectangle,' +
    ' and peek alerts the value of the front element. The front element is the most right rectangle.');
  }
}

var elem = document.getElementById('canvas');

// Stack Visualizer Functions
function stackTable()
{
  if (data_structure==1)
  {
    if (elem.getContext) {
        context = elem.getContext("2d");
        context.beginPath();
        //The x coordinate is set to 320 so drawing begins in the same place when function is called
        top_X = 320;
        //For loop used to draw rectangles that represent the stack, loops the length of the stack array
        for (let i=0; i<stack.length; i++) {
          //Filled rectangle is drawn and outlined rectange is drawn to border
          context.rect(top_X, top_Y, 130, 200);
          context.fillStyle = "#FAF9F6";
          context.fillRect(top_X, top_Y, 130, 200);
          //X coordinate is updated to draw the next set rectangles
          top_X+=130;
        }
        //Line width and color of outlined rectangle is set
        context.lineWidth = "4";
        context.strokeStyle = "black";
        context.stroke();
        if(stack.length != 0){
          context.fillStyle = "black";
          context.font = "30px Arial";
          context.fillText("TOP", top_X-95, top_Y-50);
        }
      }
    }
  }

function stack_push(value){
  if(stack.length < 10){
    //Alert window prompts the user for an input
    let new_stack_value = prompt("Please enter a value to push onto the stack:");
    if(new_stack_value=="")
    {
      //If user doesn't enter anything, prompt ends
      alert("You cannot enter a empty string!")
      return;
    }
    //If user clicks cancel, then prompt ends
    if(new_stack_value==null)
    {
      return;
    }
    context = elem.getContext("2d");
    //Canvas is cleared
    context.clearRect(0, 0, canvas.width, canvas.height);
    //User inputted value is pushed onto the stack array
    stack.push(new_stack_value);
    //Last index is updated
    top_index++;
    //Canvas is redrawn
    stackTable();
  }
  else{
    //This program only allows for 10 elements in a stack because any more is not necessary
    alert("Stack length is limited to only 10 elements for this program!");
  }
}

function stack_pop(){
  if(stack.length > 0){
    context = elem.getContext("2d");
    //canvas is cleared
    context.clearRect(0, 0, canvas.width, canvas.height);
    //value is popped off the array
    stack.pop();
    //index tracking the last index is updated
    top_index--;
    //The shapes are redrawn
    stackTable();
  }
  else{
    //Will not allow if stack is empty
    alert("You can not perform a pop on an empty stack!");
  }
}

function stack_peek(){
  if(stack.length != 0){
    //Peek always looks at the top element so it is always at the end of the array
    alert("The value in the top element is " + stack[top_index] + "!");
  }
  else{
    //Will not allow if stack is empty
    alert("Peek can not be performed on an empty stack!");
  }
  for (let i=0; i<stack.length; i++){
    let value = stack[i];
    //console log every value in the stack
    console.log(value);
  }
}

function startStackTable()
//clears canvas when user first navigates to the stack page
{
  for(let i=0; i<10;i++)
  {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }
}
// End of Stack Visualizer Functions

// Queue Visualizer Functions
function queueTable()
{
  if(data_structure==2)
  {
    if(elem.getContext)
    {
      context = elem.getContext("2d")
      context.beginPath();
      top_X = 1320;
      for(let i=0; i<queue.length; i++)
      {
        context.rect(top_X, top_Y, 130, 200);
        context.fillStyle = "#FAF9F6";
        context.fillRect(top_X, top_Y, 130, 200);
        top_X-=130;
      }
      context.lineWidth = "4";
      context.strokeStyle = "black";
      context.stroke();
      if(queue.length != 0)
      {
        context.fillStyle = "black";
        context.font = "30px Arial";
        context.fillText("FRONT", 1330, top_Y-50);
      }
    }
  }
}

function queue_enqueue(value)
{
  if(queue.length < 10)
  {
    let new_queue_value = prompt("Please enter a value to enqueue: ")
    if(new_queue_value=="")
    {
      //If user doesn't enter anything, prompt ends
      alert("You cannot enter a empty string!")
      return;
    }
    if(new_queue_value==null)
    {
      return;
    }
    context = elem.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    queue.unshift(new_queue_value);
    front_index++;
    queueTable();
  }
  else
  {
    alert("Queue length is limited to only 10 elements for this program!")
  }
}

function queue_dequeue()
{
  if(queue.length > 0)
  {
    context = elem.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    queue.pop();
    front_index--
    queueTable();
  }
  else
  {
    alert("You cannot dequeue from an empty queue!")
  }
}

function queue_peekFront()
{
  if(queue.length != 0)
  {
    alert("The value in the front element is " + queue[front_index] + "!");
  }
  else
  {
    alert("Peek cannot be performed on an empty queue!")
  }
}

function startQueueTable()
//clears canvas when user first navigates to the queue page
{
  for(let i=0; i<10;i++)
  {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }
}
// End of Queue Visualizer Functions

// BST Visualizer Functions

/**
  @descr - Creates, draws, and returns coordinates of child nodes
  @x - x coord of circle
  @y - y coord of circle
  @r - radius of circle
  @ctx - canvas context
  @data - data for node to hold
**/
class Node {

  constructor(x,y,r,ctx,data) {
    this.left_node = null;
    this.right_node = null;
    this.x = x;
    this.y = y;
    this.radius = r;
    this.canvas = ctx;
    this.data = data;
  }

  // Draws node on canvas
  draw()
  {
    this.canvas.beginPath();
    this.canvas.arc(x, y, r, 0, 2*Math.PI);
    this.canvas.stroke();
    this.canvas.closePath();
    this.canvas.strokeText(data, x, y);
  }

  //get helper functions
  get_data() { return this.data; }
  get_x () { return this.x; }
  get_y() { return this.y; }
  get_radius() { return this.radius; }

  /*
    calculates and returns coordinates for child nodes
    left: down and left 3 times the radius
    right: down and right 3 times the radius
  */
  left_child_coord() {
    return {x: (this.x - (3*this.radius)), y: (this.y + (3*this.radius))}
  }
  right_child_coord() {
    return {x: (this.x + (3*this.radius)), y: (this.y + (3*this.radius))}
  }
}

/**
  @start_x : starting x coordinate
  @start_y : starting y coordinate
  @to_x : x coordinate to draw to
  @to_y : y coordinate to draw to
  @r : radius (helps to not draw into node)
  @ctx : canvas
**/

function draw_line(start_x, start_y, to_x, to_y, r, ctx)
{
  ctx.beginPath();
  //starts at the center, bottom of parent node
  ctx.moveTo(start_x,(start_y+r));
  //draws to center, top of child node
  ctx.lineTo(to_x, (to_y-r));
  ctx.stroke();
}

class BinarySearchTree {
  //Instantiates with the html canvas and creates an empty root
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.root = null;
  }
  //Method to insert node to bst on canvas
  insert(data) {
    //Root is non-empty
    if(this.root) {
      this.rec_insert(this.root, null, null, data);
    }
    //Root is empty, add to center of canvas (also assigns call to root to keep track of non-empty)
    else {
      this.root = this.add_node_to_canvas(900,50,20,this.ctx,data);
      return;
    }
  }

  rec_insert(node, prev_node, coordinate_function, data) {
    //Reached depth of tree, add node
    if(!node) {
      let coord = coordinate_function();
      let new_node = this.add_node_to_canvas(coord.x, coord.y, 20, this.ctx, data);
      draw_line(prev_node.get_x(), prev_node.get_y(), coord.x, coord.y, prev_node.get_radius(), ctx);
      return new_node;
    }
    else {
      //BST's add lesser values to the left
      if(data <= prev_node.get_data()) {
        node.left_node = this.rec_insert(node.left_node, node, node.left_child_coord(), data);
      }
      else {
        node.right_node = this.rec_insert(node.right_node, node, node.right_child_coord(), data);
      }
    }
  }

  add_node_to_canvas(x,y,r,ctx,data)
  {
    let new_node = Node(x,y,r,ctx,data);
    node.draw();
    return node;
  }
}

// End of BST Visualizer Functions
