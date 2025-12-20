import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleView } from '../../model/consts/articleConsts';
import { ArticleList } from './ArticleList';
import { Article } from '../../model/types/article';

export default {
    title: 'entities/Article/ArticleList',
    component: ArticleList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => (
    <ArticleList {...args} />
);

const article = {
    id: '1',
    title: 'Javascript news',
    subtitle: "What's new in JS 2025",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMw1q3gI4szFY7I8Yb0EO3SzwbWmZakod15g&s',
    views: 1022,
    createdAt: '16.08.2025',
    user: {
        id: '1',
        username: 'frontendev',
        avatar: '',
    },
    type: ['IT', 'LOREM', 'SCIENCE', 'ECONOMICS'],
    blocks: [
        {
            id: '1',
            type: 'TEXT',
            title: 'The title of this block',
            paragraphs: [
                'The programme traditionally called «Hello, world!» is very simple. It displays the phrase «Hello, world!» or something similar using a certain language.',
                'JavaScript is a language that can be used to run programmes in different environments. In our case, we are talking about browsers and the Node.js server platform. If you have not written a single line of JS code yet and are reading this text in a browser on a desktop computer, it means that you are literally seconds away from your first JavaScript programme.',
                "There are other ways to run JS code in a browser. For example, when it comes to the usual use of JavaScript programmes, they are loaded into the browser to ensure that web pages work. As a rule, the code is formatted as separate files with the .js extension, which are linked to web pages, but the program code can also be included directly in the page code. All this is done using the <script> tag. When the browser detects such code, it executes it. Details about the script tag can be found at w3school.com. In particular, let's look at an example demonstrating how to work with a web page using JavaScript, provided on this resource. This example can be run using the tools provided on this resource (look for the Try it Yourself button), but we will do things a little differently. Specifically, we will create a new file in any text editor (for example, VS Code or Notepad++) and name it hello.html, then add the following code to it:",
            ],
        },
        {
            id: '4',
            type: 'CODE',
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        },
        {
            id: '5',
            type: 'TEXT',
            title: 'The title of this block',
            paragraphs: [
                'The programme traditionally called «Hello, world!» is very simple. It displays the phrase «Hello, world!» or something similar using a certain language.',
                "There are other ways to run JS code in a browser. For example, when it comes to the usual use of JavaScript programmes, they are loaded into the browser to ensure that web pages work. As a rule, the code is formatted as separate files with the .js extension, which are linked to web pages, but the program code can also be included directly in the page code. All this is done using the <script> tag. When the browser detects such code, it executes it. Details about the script tag can be found at w3school.com. In particular, let's look at an example demonstrating how to work with a web page using JavaScript, provided on this resource. This example can be run using the tools provided on this resource (look for the Try it Yourself button), but we will do things a little differently. Specifically, we will create a new file in any text editor (for example, VS Code or Notepad++) and name it hello.html, then add the following code to it:",
            ],
        },
        {
            id: '2',
            type: 'IMAGE',
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Picture 1 - screenshot of the website',
        },
        {
            id: '3',
            type: 'CODE',
            code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
        },
        {
            id: '7',
            type: 'TEXT',
            title: 'The title of this block',
            paragraphs: [
                'JavaScript is a language that can be used to run programmes in different environments. In our case, we are talking about browsers and the Node.js server platform. If you have not written a single line of JS code yet and are reading this text in a browser on a desktop computer, it means that you are literally seconds away from your first JavaScript programme.',
                "There are other ways to run JS code in a browser. For example, when it comes to the usual use of JavaScript programmes, they are loaded into the browser to ensure that web pages work. As a rule, the code is formatted as separate files with the .js extension, which are linked to web pages, but the program code can also be included directly in the page code. All this is done using the <script> tag. When the browser detects such code, it executes it. Details about the script tag can be found at w3school.com. In particular, let's look at an example demonstrating how to work with a web page using JavaScript, provided on this resource. This example can be run using the tools provided on this resource (look for the Try it Yourself button), but we will do things a little differently. Specifically, we will create a new file in any text editor (for example, VS Code or Notepad++) and name it hello.html, then add the following code to it:",
            ],
        },
        {
            id: '8',
            type: 'IMAGE',
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Picture 1 - screenshot of the website',
        },
        {
            id: '9',
            type: 'TEXT',
            title: 'The title of this block',
            paragraphs: [
                'JavaScript is a language that can be used to run programmes in different environments. In our case, we are talking about browsers and the Node.js server platform. If you have not written a single line of JS code yet and are reading this text in a browser on a desktop computer, it means that you are literally seconds away from your first JavaScript programme.',
            ],
        },
    ],
} as Article;

export const LoadingBig = Template.bind({});
LoadingBig.args = {
    articles: [],
    isLoading: true,
    view: ArticleView.BIG,
};

export const LoadingSmall = Template.bind({});
LoadingSmall.args = {
    articles: [],
    isLoading: true,
    view: ArticleView.SMALL,
};

export const ListSmall = Template.bind({});
ListSmall.args = {
    articles: Array.from({ length: 9 }, (_, index) => ({
        ...article,
        id: String(index),
    })),
    isLoading: false,
    view: ArticleView.SMALL,
};

export const ListBig = Template.bind({});
ListBig.args = {
    articles: Array.from({ length: 3 }, (_, index) => ({
        ...article,
        id: String(index),
    })),
    isLoading: false,
    view: ArticleView.BIG,
};
