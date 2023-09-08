import { Stack } from '@mui/material';
import { categories } from '../utils/constants';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';

const selectedCategory = 'New';

const Sidebar = () => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: 'auto', md: '95%' },
        flexDirection: { md: 'column' },
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          style={{
            background: category.name === selectedCategory && '#FC1503',
            color: 'white'
          }}
          key={category.name}
        >
          
          
          <span>
            {category.icon} 
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;

































































// import { categories } from '../utils/constants'


// const selectedCategory = 'New';

// const Sidebar = () => {
//   <Stack
//   direction="row"
//   sx={{
//     overflowY: "auto",
//     height: { sx: 'auto', md: '95%'},
//     flexDirection: { md: 'column'},
//     }}
//   >

//     {categories.map((category) => ( 
//       <button
//         className="category-btn"
//         style={{
//           background: category.name === selectedCategory && '#FC1503',
//           color: 'white'
//         }}
//         key={category.name}  
//       >
//         <span >
//           {category.icon}
//         </span>
//         <span >
//           {category.name}
//         </span>
//       </button>
      
//     ))}
//   </Stack>
    

// }

// export default Sidebar

// style={{ color: category.icon === selectedCategory ? 'white' : 'red', marginRight: '15px'}}
// style={{ opacity: category.name === selectedCategory ? '1' : '0.8'}}