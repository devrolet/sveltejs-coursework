<script>
  import Goal from "./Goal.svelte";

  let courseGoal = "";

</script>
<h1>Assignment</h1>

<p>Solve these tasks.</p>

<ol>
  <li><strike>Add an input field that allows users to enter a course goal.</strike></li>
  <li><strike>Output the user input in a h1 tag.</strike></li>
  <li>
    Color the output red (e.g. by adding a class) if it contains at least one exclamation mark.
  </li>
  <li>
    <strike>Put the h1 tag + output into a separate component to which you pass the user input</strike>
  </li>
</ol>

<label for="course-goal">What is your goal for this course?</label>
<input id="course-goal" type="text" bind:value="{courseGoal}" />

<Goal goal={courseGoal}/>