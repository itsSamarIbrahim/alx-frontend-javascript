// task_4/js/subjects/Teacher.ts

namespace Subjects {
    export interface Teacher {
      firstName: string;
      lastName: string;
      experienceTeachingC?: number;  // Optional, only needed for Cpp
      experienceTeachingJava?: number; // Optional, only needed for Java
      experienceTeachingReact?: number; // Optional, only needed for React
    }
  }
  