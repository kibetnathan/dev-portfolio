---
title: "The Open Church Manager: A Journey of Refactoring My Own Ego"
description: "A reflection on the capstone project that taught me to stop trying to be special and start trying to be useful — and the stack decisions that followed."
date: "2025-03-20"
tags: ["Django", "React", "Open Source", "Reflection"]
---

I've recently finished a Full Stack course and what I have to show for it, at the moment, is my capstone project — that felt more so like a journey than just a project. The project itself is titled Open Church Manager; an open source community management tool I made to solve the kind of organisational problems churches may find.

When I initially came up with the idea I had two objectives in mind:

1. Build a tool to help manage congregant data in our church.
2. Submit a project for my Django module at Zindua.

To give a little context, at the time, we were on our last module for the course, and for every module, we'd take a week or two to make a project to demonstrate our competence. I had a separate, more ambitious idea planned for my final capstone, so I went ahead and picked something I thought would be simpler for the Django module... I thought.

Since the project was meant for Django, I used Django and Postgres for everything — frontend, templating, backend, everything was reliant on the framework. I completed the module with a barebones project with a god awful UI, but it was functional. At that point, I decided to open source it. I later found out that we had to carry our initial module idea into the actual capstone project.

That was the moment the project stopped being just a coding exercise and started being a mirror.

## The Tooling: Choosing Pragmatism Over Ego

When I moved into the actual capstone phase, I had to stop playing with "smart" hacks and start building something that actually worked. I looked at my initial stack — everything stuck inside Django's templating engine — and realized it wasn't enough. I needed to move fast and provide a real-time, interactive experience for a community.

I pivoted to a stack that wasn't about showing off, but about getting the job done. I chose **React 19** with **Vite** for the frontend because it gave me the snappy, modern feel I wanted; and I used **Zustand** to manage state across a complex set of needs — like syncing a user's Bible memorization progress or real-time chat rooms — without the boilerplate bloat of Redux.

The backend was another lesson in trade-offs. I stuck with **Django 6** and **Django REST Framework** because I needed a robust, tried-and-true ORM to handle the multi-tenancy logic required for a church structure. However, I didn't try to force everything into the SQL database. When I needed real-time chat, I stopped trying to reinvent the wheel with complex websocket configurations and just integrated **Firebase Firestore**; it's not "pure" to have a split backend, but it's pragmatic. It solved the problem of real-time messaging instantly so I could focus on what mattered — the church management features.

I leaned heavily into **Tailwind CSS 4** and **DaisyUI** for the UI. In the past, I would have wasted days trying to craft custom CSS animations to feel "special." This time, I used pre-built components that looked professional out of the box; which allowed me to spend my energy on the logic that actually helps leaders manage departments and reading plans.

For a long time, I wanted this project to be my "world-altering phenomenon." I wanted it to be the thing that proved I was special. But as I refactored the codebase, I realized the project is nothing without the environment it lives in — it is the sum of the Zindua curriculum, the documentation provided by the community, the feedback from my peers, and the messy, real-world organizational needs of the church.

Building Open Church Manager taught me that my "self" as a developer is just a feature of grammar. I am not a lone wolf genius builder; I am just the person currently typing at the keyboard, synthesizing the tools and the needs that were already there.

If you want to see where I'm at with it, you can check out the repository. It's not perfect, it's not world-altering, but it's a functional piece of software that exists because I finally stopped trying to be special and started trying to be useful.
