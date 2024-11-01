# Notes App

## Installing / Getting started

A quick introduction of the minimal setup you need to get the app running.

<br>To create React app through CRA, run the following command:
``` js
npx create-react-app "AppName"
```
The execution speed of the program created through create-react-app (CRA) is slow compared to that of vite. CRA is used to create those app which is bit complex and large.
<br>You can even create react app through vite. Run the following command if you want to create react app via vite;
``` js
npm create vite@latest
```
This create the app. After that you need to write the project & package name (you can even skip this part).
<br>Then choose the required framework using which you intend to build this app.
<br>Then choose the desired variant (Here you have 4 options: TypeScript, TypeScript with compiler, JavaScript & JavaScript with compiler).

Then run the following commands to navigate to the folder:
``` js
cd "folder_name"
```
Install all necessary packages using the following command;
``` js
npm install
```
**OR**
``` js
npm i
```
Then start the app using the following command;
``` js
npm run start
```
On following the link provided, you get to see the sample app.
<br>If you ever intend to change the command for runnig the code, you can do that by making some changes in the package.json file.

### Getting started with MUI

Install material-UI using the following command;
``` js
npm install @mui/material @emotion/react @emotion/styled
```
<!-- Also, we install material UI Lab to get additional components like pagination which material UI don't provide. Use the following command to install;
``` js
npm install @mui/lab
``` -->
In order to use icons, we need to install package using the following command;
``` js
npm install @mui/icons-material
```

#### Different components in material UI

1. Typography
<br>In material UI, we don't use heading and paragraph tags for different sizes. Instead we use, typography and pass different variant according to our requirement
<br>We can import Typography using the following command where we want to use;
``` js
import Typography from '@mui/material/Typography';
```
After importing we can use it as tag. By default Typography uses paragraph tag. If we want to change it to any other tag then we can add 'variant' props and assign any value as tag.
``` js
<Typography variant='' color=''></Typography>
```

2. Button
<br>We can import Button using the following command where we want to use;
``` js
import Button from '@mui/material/Button';
```
After importing it we can use it as a tag and pass different varinat
``` js
<Button variant='' color=''></Button>
```

3. ButtonGroup
<br>If we want a list of buttons together, we can use ButtonGroup.
<br>We can import ButtonGroup using the following command where we want to use; 
``` js
import ButtonGroup from '@mui/material/ButtonGroup';
```
After importing it we can use it as a tag and pass different varinat. Inside ButtonGroup tag we can list the number of buttons we want and assign its text value
``` js
<ButtonGroup variant='' color=''> 
  <Button>One</Button>
  <Button>Two</Button>
</ButtonGroup>
```

4. Container
<br>We have Container component to get default margin and padding.
<br>We can import Container using the following command where we want to use; 
``` js
import Container from '@mui/material/Container';
```
After importing, we can use it by calling the tag;
``` js
<Container></Container>
``` 

5. Icons
<br>After installing icon-materials using npm command, we need to import the required icons in the file where we want to use. 
``` js
import AcUnitOutlinedIcon from  "@mui/icons-material/AcUnitOutlined"
```
After importing we can use icons as component. We can even pass props;
``` js
<AcUnitOutlined color=""/>
```
We can even use icons in bottom using props like 'startIcon' and 'endIcon'
``` js
<Button startIcon={<AcUnitOutlined />} endIcon={<AcUnitOutlined />}</Button>
```

6. Custom CSS (makeStyles)
<br>In version5 of material UI, we can add custom CSS using sx attribute
``` js
<Button
  sx={{
    backgroundColor: 'violet',
    fontSize: 60,
    '&:hover': {
      backgroundColor: 'blue',
    }
  }}
>
Submit
</Button>
```
Every thing should be in camel-case

<br>7. CSS custom themes
<br>In order to customize our themes, we need to import the following components;
``` js
import { createTheme, ThemeProvider } from '@mui/material/styles';
```
Then override the component you want to override by using the createTheme function which takes object as argument;
``` js
const theme = createTheme({
  palette: {
    primary: {
      main: '#fefefe'
    }
  }
});
```
Assigning value using this approach we have to specify color for each object such as different colors for main, light and dark. We can also assign color using another approach as a whole;
``` js
const theme = createTheme({
  palette: {
    primary: pink
  }
});
```
After that, wrap your whole app component with "ThemeProvider" component and pass a prop "theme" to your component;
``` js
function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Notes />}></Route>
            <Route path='/create' element={<Create />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}
```

### Dependency used;

1. react-router-dom
Here we create different pages, so we use react-router-dom to navigate to different pages;
<br>Install react-router-dom using the following command;
``` js
npm i react-router-dom
```

### Building

To build the project for deployment, run the following command;
``` js
npm run build
```

### Deploying/Publishing

To deploy the project on github pages, follow these steps;
<br>1. Put the following code in your 'package.json' file;
``` js
"homepage": "https://myusername.github.io/my-app",
```
Replace 'myusername' with your github username and 'my-app' with your repository name.
<br>2. Then run the following code in terminal to install github pages
``` js
npm install --save gh-pages
```
<br>3. After installing github pages, add the following script in your 'package.json' file;
``` js
"predeploy": "npm run build",
"deploy": "gh-pages -d build",
```
<br>4. To deploy, run the following command;
``` js
npm run deploy
```

[comment]: # (## Features)

[comment]: # (## Contributing)

## Links
+ <a href = "https://github.com/chyroshan066/notesApp">Project homepage</a>
+ Other Projects:
  - <a href = "https://github.com/chyroshan066/text-formatter">Text Formatter</a>
  - <a href = "https://github.com/chyroshan066/notes">Notes</a>
+ <a href = "https://github.com/chyroshan066">Profile</a>
  
[comment]: # (## Licensing)