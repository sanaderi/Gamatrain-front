# Commit Messages
The style of a commit message should be in the following format:

`<type>: <subject>`

## type
The type should be one of the following keys:

 **_feature_**

When you develop a new feature, you should use this key to describe the commit. Typically, this type of commit involves a significant amount of code spread across various layers, such as Domain, DataSource, and others.

**_refactor_**

When you change the structure of a code without altering its observable behavior, you should use this type to describe the commit.

**_behavior_**

When you have previously developed a feature and now change its observable behavior by adding or removing something that impacts the end-user experience, you should use this type to describe the commit.

**_fix_**

When you fix a bug, correct a typo, or perform similar tasks, you should use this type to describe the commit.

**_doc_**

When you add documentation for a piece of code or update files like README and similar ones, you should use this type to describe the commit.

**_style_**

When you change the style of the code, such as removing extra whitespace between methods, you should use this type to describe the commit.

**_chore_**

For other minor changes, such as adding a new dependency and updating the .csproj file, you should use this type to describe the commit.



## subject

In the subject section, you should describe the task you performed in a short sentence.
This sentence should meet the following conditions:

- Start with a lowercase letter.
- Be in the present tense.
- Be in the imperative form.

If this commit is made in response to an issue, the relevant issue should be mentioned at the end of the sentence in parentheses.
