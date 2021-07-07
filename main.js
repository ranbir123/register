name_of_student=[];
function submit()
{
for (var j = 1; j <= 4; j++)
{
var name1 ="name- "+ document.getElementById("name_of_the_student_"+j).value;
name_of_student.push(name1);

}
document.getElementById("display_name_with_commas").innerHTML=name_of_student;
var remove=name_of_student.join(" ");
document.getElementById("display_name_without_commas").innerHTML=remove;


}
function sorting()
{
name_of_student.sort();
document.getElementById("display_name_with_commas").innerHTML=name_of_student;
var remove=name_of_student.join(" ");
document.getElementById("display_name_without_commas").innerHTML=remove;



}




