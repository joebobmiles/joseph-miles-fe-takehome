# Frontend Take Home Project

## Task

One of Coterie’s core frontend projects is our insurance quote flow ([https://quote.coterieinsurance.com](https://quote.coterieinsurance.com/)). You’ll create an abbreviated quote flow that collects some information from the user and shows them what types of insurance they might qualify for. The feature requirements and tech stack are listed below. If something isn’t explicitly listed you can choose how you want to handle it (e.g. styling - you could use Styled Components, Bootstrap, Sass, etc.). If you have any questions or are unsure about something don’t hesitate to contact Karl Morand ([karl@coterieinsurance.com](mailto:karl@coterieinsurance.com)).

## Tech Stack

Use the following JS packages to make the app

- React (Create React App) - https://create-react-app.dev/
- Redux (Redux Toolkit) - https://redux-toolkit.js.org/

Other packages/tools may be used for styling, routing, testing, etc.

## Requirements

- Inputs to collect the following information about the user's business
    - Business name (string)
    - Industry
        - The interface should present the string description for the user to choose an option but the data sent to the server as the `industryId` should be the id (see the example POST body below)
        - 10537 - Plumber
        - 10391 - Software developer
        - 10415 - Lawyer
        - 10109 - Handyman
    - Email (string)
    - Annual sales (integer with these options: $50k, $75k, $100k, $150k, $200k)
    - Annual payroll (integer with these options: $50k, $75k, $100k, $150k, $200k)
    - Number of employees (integer)
    - Zip code (string)
        - This will need to sent in an object that is in a `locations` array (see example POST body below)

- The input fields should be split up over at least two pages (you can choose how to break them up and how to handle routing)
- After collecting the information from the user you will `POST` it to our Create Application endpoint:
    - [`https://api-sandbox.coterieinsurance.com/v1/commercial/applications`](https://api-sandbox.coterieinsurance.com/v1/commercial/applications)
- All API calls should include this Authorization header:
    - `authorization: token 73920c6f-d530-419c-87b3-4f4762e05e9d`
- The response will include an `availablePolicyTypes` array (see example response below) that indicates the types of policies that the user is eligible for. The final screen should show the user these options based on the API response.
    - GL === "General Liability"
    - PL === "Professional Liability"
    - BOP === "Business Owners Policy"
- Use git and GitHub for version control, share the GitHub repo with Karl Morand ([karl@coterieinsurance.com](mailto:karl@coterieinsurance.com))
- **Have fun!** We're interested in seeing how you approach the challenge and how you solve problems with code. The goal is for you to be successful, so if you have any questions or something doesn't seem clear don't hesitate to ask. Asking questions and seeking clarification isn't a negative indicator about your skills - it shows you care and that you want to do well. Asking questions is *always* encouraged at Coterie, and our hiring process is no different.

### Example POST body

![sample-payload.png](sample-payload.png)

### Example response

![sample-response.png](sample-response.png)