# LandBell

A simple reactive form

## Table of Contents

- [Installation](#installation)
- [Components](#components)
- [Layouts](#layouts)
- [States](#states)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/landbell-form.git
    ```

2. Navigate to the project directory:

    ```bash
    cd landbell-form
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Run the development server:

    ```bash
    npm run dev
    ```

Your project should now be running at `http://localhost:XXXX`.

## Components

- Components
    - SideForm -> Stores the form that generates the fields for the main form
    - MainForm -> Primary Form with all the inputs stored in localstorage

## Layouts

- MainLayout -> Contains the default layout for the view. (i opted to not have a view due to simplicity)

## States

- Sates
    - DataForm -> The shared reactive state of my form, can be used and reused