
class TodoData {

<<<<<<< HEAD
    constructor(title,startDate,endDate,id) {
        this.text = text;
        this.startDate = new Date();
        this.endDate = new Date();
=======
    constructor(text, id) {
        this.text = text;
        this.timestamp = new Date().toLocaleDateString();
>>>>>>> 1275fd570819b21ef340c1b29bd9d13ae2cae79a
        this.id = id;
    }

}

export default TodoData;