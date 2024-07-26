# What is this?

This is `src`. This is where most of our code goes. This document tells you the following:

- What do the directories mean? (They're conventions!)
- What is the easiest way to do our job with as few bugs as possible? (Use storybook!)

## Directory structure

Agility's web UI is a Headless architecture, so at some point we have to add code to give it a head. This `src` directory structure is meant to help _you_ understand how to connect your React code as the head to the Agility CMS's body.

The directories -- by convention -- map onto Agility's core concepts of Page Models and Component Models.

![Screenshot 2024-07-26 at 9 03 37 AM](https://github.com/user-attachments/assets/cf418046-9f93-4bef-a0cc-3e3789dd975b)

> [!IMPORTANT]  
> **NOTE:** You can alter the convention as you see fit because you are the adult in the room.

### 📂 `src/component-models` Directory

Refers to [Component Models in Agility Documentation](https://agilitycms.com/docs/developers/component-models) by convention.

### 📂 `src/page-models` Directory

Refers to [Page Models in Agility Documentation](https://agilitycms.com/docs/developers/page-models), also by convention.

## Lower Case Is Best!

## How do do development here

First, use plop.

Update your storybook to match the designs

- [ ] Include figma link
- [ ] include controls that match
- [ ] verify it works on mobile, tablet, desktop etc
- [ ] verify that it supports multiple themes (aka banners)

# Additional Notes

multiple sites
https://agilitycms.com/docs/overview/using-agility-cms-for-multiple-sites

naming things: modules, models, pages, templates, what?????
https://agilitycms.com/resources/posts/agility-announces-terminology-updates
