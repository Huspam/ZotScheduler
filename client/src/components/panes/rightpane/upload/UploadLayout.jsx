import DegreeWorksUploader from './DegreeWorksUploader'
import Profile from './Profile'
import ClassesNeeded from './ClassesNeeded'
import { useStudentContext } from '../../../../contexts/StudentContext';
import classes from '../../PaneContentLayout.module.css';

function UploadLayout() {
  const { studentClasses } = useStudentContext();

  return (
    <>
      <div className={classes.layout}>
        <DegreeWorksUploader />
        <Profile />
        {Object.keys(studentClasses["needed"]).length !== 0 &&
            <ClassesNeeded studentClassesNeeded={studentClasses["needed"]} />
        }
      </div>
    </>
  )
}

export default UploadLayout;