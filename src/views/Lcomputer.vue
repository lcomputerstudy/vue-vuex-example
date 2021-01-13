<template>
    <div>
        <h1>엘컴</h1>
        <div>
        
        <newstudent/>
        <studentlist/>
        </div>
    </div>
</template>

<script>
import studentlist from '../components/Student/StudentList'
import newstudent from '../components/Student/NewStudent'
export default {
     components: {
        studentlist,
        newstudent
    }
}
</script>   