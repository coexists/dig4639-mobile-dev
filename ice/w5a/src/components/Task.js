class Task {
    //element;
    constructor(props) {
        this.props = props;
        this.element = document.createElement("div");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change",this.inputChanged)
        this.element.appendChild(checkbox);
        let taskText = document.createElement("span");
        taskText.innerHTML = props.content;
        this.element.appendChild(taskText);
        
    }
    inputChanged() {
        console.log(this.element.innerHTMl);
    }
    render(){
        return this.element;
    }
}
 
export default Task;