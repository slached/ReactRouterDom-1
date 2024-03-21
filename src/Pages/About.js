import React from 'react';

export default function About() {
    return (
        <div className={"flex justify-center items-center"}>
            <div
                className={"flex flex-col gap-y-6 max-w-4xl border-2 border-blue-500 rounded-tr-lg rounded-bl-lg p-7 text-2xl"}>
                <h1 className={"text-5xl"}><strong>About us</strong></h1>
                <p><strong>1.</strong> Your about page can and will be more comprehensive than a single mission
                    statement. However, to
                    draw
                    people in, you need to succinctly state your goal in the industry up front.

                    What is your business here to do? Why should your website visitors care? This information will give
                    the reader something to remember about your company long after they leave your website.</p>
                <p><strong>2.</strong> Outline your company story.
                    Every business has a story to tell. Even if you’re running a startup with a brief history, you’ll
                    want to share your company’s progress. Talk about how you got to where you are today on your about
                    page.

                    Pro tip: Isolate the milestones before your company’s founding, and use them to give readers some
                    backstory on your current venture.</p>
                <p><strong>3.</strong>Reveal how you’ve evolved.
                    There’s no shame in admitting how your business strategy — or even your way of thinking — has
                    changed since you began. In fact, these evolutions can improve the story you tell to website
                    visitors.

                    About pages are perfect spaces to talk about where you started, how you’ve grown, and the ideals
                    that have helped your organization mature. Use these moments to show people that you're always ready
                    to change and adapt to the needs of your industry.</p>
            </div>
        </div>
    );
}

