# Contributing

This library is maintained by Culture Amp's Front End Capability Team, but contributions are welcome from anyone.

### Releasing updates to the NPM package

Releases are triggered by commit messages that follow the [Semantic Release][] format.

When a pull request is merged, the commit messages are analyzed, and it determines if a patch, minor or major (breaking) release is warranted.
(See [Semantic Versioning][] if you want to learn more).
This means you need at least one commit message in your PR that uses the correct format.
If no commit messages match the format, it is assumed that an NPM release is not necessary.

The basic format is:

    type(component): message

The type is "fix", "perf", or "feat".
The component is whatever component your change affects. (We're not strict on this).
The message should explain your change in one short line. You can write more lines underneath to explain it more fully if needed.

We often use `yarn commit` - a helper that works like `git commit` but guides you through writing a valid release commit message.

Include this commit in your PR, and when you merge, an NPM release will happen automatically. 🎉

Here are some examples of formatted commit messages that `yarn commit` generates. You can also write these yourself.

A "fix" change will trigger a patch release (eg bumping the version from 16.0.0 to 16.0.1):

    fix(button): Fix the focus styling on our button component

A "perf" change will also trigger a patch release:

    perf(notification): Update CSS transitions to be more performant

A "feat" change will trigger a minor release (eg bumping the version from 16.0.0 to 16.1.0):

    feat(button): Add an iconButton variant to our elm button
    feat(toggle): Add new Toggle component

Add the phrase "BREAKING: " to your commit message to ensure the breaking change is noted (eg bumping the version from 16.0.0 to 17.0.0).
This will trigger a major release. You can do these in combination with `fix` `feat` or `perf` messages.

    fix(menulist): No longer allow weird children to be passed to MenuList

    BREAKING: MenuItem no longer accepts any React component as it's label, it only allows a plain string as the label.

If you have trouble, ask the Front End Capability Team for help.

[semantic release]: https://github.com/semantic-release/semantic-release/
[semantic versioning]: https://semver.org/

### Releasing updates to the style-guide website

The website is hosted with Github Pages and is updated automatically when PRs are merged to master.

### Build Instructions

To run the website locally:

1.  Ensure you have NodeJS<sup id="fn1">[1](#nodejs)</sup> and [Yarn][yarn]
    installed.
2.  Install the dependencies: `bin/setup`
3.  Run Gatsby local development server: `bin/gatsby`
4.  View the site at http://localhost:8000

To deploy the site to Github pages:

1.  Ensure you have NodeJS<sup id="fn1">[1](#nodejs)</sup> and [Yarn][yarn]
    installed.
2.  Install the dependencies: `bin/setup`
3.  Run the Gatsby deploy script: `bin/deploySite`
