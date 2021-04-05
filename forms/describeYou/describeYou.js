
rdoPersonality.onchange=function(){
  let userChoice = $("input[name=rdoPersonality]:checked").prop("value")
   console.log(`You picked ${userChoice}`)
   
  if (rdoPersonality.value == 0)   // picked the first choice
      lblRdoOutput.value = `I would agree that you are a ${userChoice} person too!`
   else if (rdoPersonality.value == 1)
      lblRdoOutput.value = `I would agree that you are a ${userChoice} person too!`
    else if (rdoPersonality.value == 2)
      lblRdoOutput.value = `I would agree that you are a ${userChoice} person too!`
    else if (rdoPersonality.value == 3)
      lblRdoOutput.value = `I would agree that you are a ${userChoice} person too!`
}

btnChangeForm1.onclick=function(){
  ChangeForm(favExercises)
}
