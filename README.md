<h1 align="center">
  Jesubohr's Portfolio
</h1>

A portfoliowebsite for developers, based on the [Portfolio by midudev](https://github.com/midudev/porfolio.dev). It allows you to generate a beautiful portfolio page from a single JSON file. Built with Astro and Tailwind CSS.

## ✨ Features

- **Single JSON file**: All your data is stored in a single JSON file.
- **Dark mode**: Toggle between light and dark mode.
- **Responsive**: Works on all devices.
- **SEO**: Optimized for search engines.

## 👨🏻‍💻 Getting started

1. You can use this repo as a template for a new Astro project or clone it directly: 
> I use [pnpm](https://pnpm.io/) as the package manager, but you can use npm or yarn as well.

```bash
pnpm create astro@latest -- --template jesubohr/jesubohr-portfolio
```

2. Configure the data in the `src/portfolio.example.json` file to match your information. (Remember to rename the file to `portfolio.json`.)

3. Start the development server:

```bash
pnpm dev
```

4. Open [http://localhost:4321](http://localhost:4231) in your browser to see the result.

## 📄 Structure of the JSON file

The structure of the JSON file is as follows:

```json
{
  "basics": {
    "name": "John Doe",
    "label": "Software Developer",
    "profileImage": "/johndoe-profile.jpg",
    "aboutImage": "/johndoe-about.jpg",
    "email": "johndoe@gmail.com",
    "resume": "https://johndoe-resume.com",
    "summary": "*Software developer* working on making _good software_.",
    "profiles": [
      {
        "network": "GitHub",
        "url": "https://github.com/johndoe"
      }
    ]
  },
  "about": "About me section",
  "experience": [
    {
      "startDate": "Jan 2019",
      "title": "Software Developer",
      "company": "Freelance",
      "description": "Developed web applications using *(insert technologies)*, for diverse projects. Conducted testing and debugging to ensure a *(insert objectives achieved)* for the project."
    }
  ],
  "projects": [
    {
      "name": "Project",
      "description": "Project description",
      "image": "/projects/project.jpg",
      "repository": "https://github.com/johndoe/project",
      "tags": ["HTML", "JavaScript"]
    },
  ]
}
```
### Minimal Markdown Support

The text on the file supports a minimal set of markdown syntax. The following table shows the supported syntax and the result:
|   Syntax    |    Result    |
|-------------|--------------|
|`*text*`     |`<strong>text</strong>` |
|`_text_`     |`<em>text</em>` |
|`[text]`     |`<p>text</p>`   |
|`text\n`     |`<br>text`      |
|`[text](url)`| `<a href="url">text</a>` |

## 🚀 Deployment

You can deploy this project to Vercel, Netlify, or any other platform that supports Astro, or you can use the `pnpm build` command to generate a static version of the website.

## License

This project is open source and available under the [MIT License](LICENSE).
