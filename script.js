var app = new Vue({
  //I spent THREE HOURS ON THIS PART and didn't assign it to a variable like there was in the in class exercise. I hope you read this comment. D,:
  el: "#app",
  data: {
    newQuestion:"",
    newAnswer:"",
    newCategory:"",
    cards:[
      {
        question:"What year was IUPUI founded?",
        answer:"1969",
        category:"history",
        flipped:false
      },
      {
        question:"What is 2+2?",
        answer:"Fish",
        category:"math",
        flipped:false
      },{
        question:"Is mayonnaise an instrument?",
        answer:"No",
        category:"science",
        flipped:false
      }
    ]

  },
  methods:{
    flip:function(index){
      this.cards[index].flipped=!this.cards[index].flipped;
    },
    //pushes the card list and adds question, answer, category, and automatically assigned flipped to false. question, answer, and category are grabbed from the 'id' in HTML
    newCard:function(){
      this.cards.push({
        question: this.newQuestion,
        answer: this.newAnswer,
        category: this.newCategory, 
        flipped: false})
        
      this.newQuestion="";
      this.newAnswer="";
      this.newCategory="";
    }
  }
})