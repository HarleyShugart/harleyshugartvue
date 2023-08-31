<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Card from 'primevue/card';
import { Ref, ref } from 'vue';

enum ExperienceType {
    Professional = 'Professional',
    College = 'College Coursework'
}

class Skill {
    public Name: string;
    public YearsOfExperience: number;
    public TypeOfExperience: ExperienceType;

    constructor(name: string, yearsOfExperience: number, typeOfExperience: ExperienceType){
        this.Name = name;
        this.YearsOfExperience = yearsOfExperience;
        this.TypeOfExperience = typeOfExperience;
    }
}

const skills: Ref<Skill[]> = ref([
    new Skill('Vue.js', 3, ExperienceType.Professional),
    new Skill('TypeScript', 3, ExperienceType.Professional),
    new Skill('Cypress', 3, ExperienceType.Professional),
    new Skill('Storybook', 3, ExperienceType.Professional),
    new Skill('Visual Studio Code', 3, ExperienceType.Professional),
    new Skill('Git & GitHub', 7, ExperienceType.Professional),
    new Skill('GitHub Actions', 2, ExperienceType.Professional),
    new Skill('npm', 3, ExperienceType.Professional),
    new Skill('C#', 5, ExperienceType.Professional),
    new Skill('PostgreSQL', 3, ExperienceType.Professional),
    new Skill('DBeaver', 3, ExperienceType.Professional),
    new Skill('Microsoft SQL Server', 3, ExperienceType.Professional),
    new Skill('Microsoft SQL Server Management Studio', 3, ExperienceType.Professional),
    new Skill('MVC', 5, ExperienceType.Professional),
    new Skill('Razor', 5, ExperienceType.Professional),
    new Skill('ReSharper', 5, ExperienceType.Professional),
    new Skill('Visual Studio', 5, ExperienceType.Professional),
    new Skill('TeamCity', 5, ExperienceType.Professional),
    new Skill('NUnit', 5, ExperienceType.Professional),
    new Skill('jQuery', 5, ExperienceType.Professional),
    new Skill('Java', 4, ExperienceType.College),
    new Skill('Eclipse', 4, ExperienceType.College),
    new Skill('C++', 2, ExperienceType.College),
    new Skill('Python', 1, ExperienceType.College)
]);
</script>

<template>
<div>
    <Card>
        <template #title>Skills</template>
        <template #content>
            <p>
                This serves to document some of the skills, tools, languages, etc which I've utilized during college and my career. The default order they are listed in roughly reflects my most recent to least recent experience.
            </p>

            <DataTable :value="skills" removable-sort>
                <Column field="Name" header="Skill" sortable></Column>
                <Column field="YearsOfExperience" header="Years Of Experience" sortable></Column>
                <Column field="TypeOfExperience" header="Type Of Experience" sortable></Column>
            </DataTable>
        </template>
    </Card>
</div>
</template>