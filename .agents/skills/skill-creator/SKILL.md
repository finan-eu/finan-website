---
name: skill-creator
description: Create and format agent skills according to agentskills.io standards. Use when creating a new skill, formatting an existing skill properly, converting documentation to skill format, or learning how to structure SKILL.md files correctly.
---

# Skill Creator

Create and format agent skills following the agentskills.io specification.

## Skill Structure

A skill is a directory with, at minimum, a `SKILL.md` file:

```
.agents/skills/skill-name/
├── SKILL.md          # Required: metadata + instructions
├── scripts/          # Optional: executable code (Python, bash, etc.)
├── references/       # Optional: documentation, examples
├── assets/           # Optional: templates, resources
└── ...               # Any additional files
```

## Creating a SKILL.md

### 1. Frontmatter (Required)

The `SKILL.md` file must start with YAML frontmatter between `---` markers:

```yaml
---
name: skill-name
description: What this skill does and when to use it. Be specific about triggers.
---
```

#### Required Fields

| Field | Description | Constraints |
|-------|-------------|-------------|
| `name` | Short identifier | 1-64 chars, lowercase a-z, 0-9, hyphens only. No leading/trailing hyphens. Must match folder name. |
| `description` | When to use this skill | 1-1024 chars. Describe what it does AND when to use it. Include trigger keywords. |

#### Optional Fields

```yaml
---
name: skill-name
description: Description of what this skill does and when to use it.
license: Apache-2.0          # License name or file reference
compatibility: Requires Node.js 20+  # Environment requirements
metadata:
  author: your-name
  version: "1.0"
allowed-tools: Read, Glob, Grep  # Pre-approved tools (experimental)
---
```

### 2. Body Content (Required)

After the frontmatter, write instructions in Markdown:

```markdown
# Skill Title

Brief description of what this skill does.

## When to Use

List specific scenarios when this skill should be activated:
- User says "specific trigger phrase"
- User wants to accomplish specific task
- Specific condition is met

## Steps

1. **First step description**
   ```bash
   # Example command
   command here
   ```

2. **Second step description**
   - Sub-instruction
   - Another sub-instruction

3. **Verification step**
   - What to check
   - Expected outcome

## Examples

### Example 1: Specific Use Case
Brief description of the example.

```bash
# Commands for this example
step 1
step 2
```

### Example 2: Another Use Case
Another example with explanation.

## Tips

- Best practice 1
- Best practice 2
- Common pitfall to avoid

## Notes

- Additional context
- Important reminders
- Edge cases
```

## Best Practices

### Name Field

✅ **Good:**
```yaml
name: pdf-processing
name: git-cleanup-tracking
name: astro-deploy
```

❌ **Bad:**
```yaml
name: PDF-Processing      # uppercase not allowed
name: -pdf               # leading hyphen
name: pdf--processing    # consecutive hyphens
name: pdf_processing     # underscores not allowed
```

### Description Field

✅ **Good description (specific, includes triggers):**
```yaml
description: Extract text and tables from PDF files, fills PDF forms, and merges multiple PDFs. Use when working with PDF documents or when the user mentions PDFs, forms, or document extraction.
```

❌ **Poor description (too vague):**
```yaml
description: Helps with PDFs.
```

### Body Content

1. **Start with a clear title** - H1 header with skill name
2. **Include "When to Use" section** - Help agents identify activation triggers
3. **Use numbered steps** - Sequential, actionable instructions
4. **Provide examples** - Show real-world usage scenarios
5. **Add code blocks** - Include actual commands where applicable
6. **Use formatting** - Bold, lists, tables for readability
7. **Include tips section** - Best practices and common pitfalls
8. **Add notes section** - Edge cases, important context

## Optional Directories

### scripts/

Executable code that the skill can reference:

```
skills/my-skill/
├── SKILL.md
└── scripts/
    ├── validate.py
    └── setup.sh
```

### references/

Documentation and examples:

```
skills/my-skill/
├── SKILL.md
└── references/
    ├── api-docs.md
    └── examples/
        └── sample.json
```

### assets/

Templates and resources:

```
skills/my-skill/
├── SKILL.md
└── assets/
    ├── template.html
    └── config.json
```

## Validation Checklist

Before completing a skill, verify:

- [ ] Folder name matches `name` field in frontmatter
- [ ] `name` field is lowercase with hyphens only
- [ ] `description` is 1-1024 characters
- [ ] `description` includes both what it does AND when to use it
- [ ] `description` includes trigger keywords
- [ ] SKILL.md has proper YAML frontmatter with `---` delimiters
- [ ] Body content has H1 title
- [ ] "When to Use" section exists
- [ ] Steps are numbered and actionable
- [ ] Code examples are provided where applicable
- [ ] File path references use correct locations
- [ ] Tips section provides best practices
- [ ] Notes section covers edge cases

## Creating a New Skill - Full Example

1. **Create the directory:**
   ```bash
   mkdir -p .agents/skills/my-new-skill
   ```

2. **Create SKILL.md:**
   ```bash
   cat > .agents/skills/my-new-skill/SKILL.md << 'EOF'
   ---
   name: my-new-skill
   description: Brief description of what this skill does and when to use it. Include trigger keywords like "deploy", "create", "fix", etc.
   ---

   # My New Skill

   Brief overview of the skill's purpose.

   ## When to Use

   - User says "specific trigger phrase"
   - User wants to accomplish X
   - Specific condition Y is met

   ## Steps

   1. **First action**
      ```bash
      command example
      ```

   2. **Second action**
      - Step detail
      - Another detail

   3. **Verify result**

   ## Examples

   ### Example: Common Use Case
   Description of example.

   ```bash
   commands here
   ```

   ## Tips

   - Best practice 1
   - Best practice 2

   ## Notes

   - Important context
   - Edge case handling
   EOF
   ```

3. **Add any optional directories:**
   ```bash
   mkdir -p .agents/skills/my-new-skill/scripts
   mkdir -p .agents/skills/my-new-skill/references
   ```

4. **Stage and commit:**
   ```bash
   git add .agents/skills/my-new-skill/
   git commit -m "feat: add my-new-skill for [purpose]"
   ```

## Progressive Disclosure

Agent Skills uses progressive disclosure:

1. **Discovery:** Agent reads only `name` and `description` to decide if skill is relevant
2. **Activation:** When triggered, agent loads full `SKILL.md` body into context
3. **Execution:** Agent follows the instructions in the body

This means:
- Keep `description` concise but trigger-rich
- Make body content comprehensive and actionable
- Use clear headings for easy scanning

## File References

When referencing files in skill instructions:
- Use relative paths from project root when possible
- Use absolute paths if necessary
- Include examples of actual file paths
- Reference the skill's base directory with: `file:///path/to/.agents/skills/skill-name/`

## Common Patterns

### Skill for a CLI tool:
```yaml
name: tool-name-cli
description: Use the ToolName CLI to perform X, Y, and Z operations. Use when user mentions "toolname", "do X", or needs to perform Y operations.
```

### Skill for a workflow:
```yaml
name: workflow-deploy
description: Deploy the application to production following the deployment checklist. Use when user says "deploy", "ship to prod", or "release to production".
```

### Skill for analysis:
```yaml
name: code-review-security
description: Perform security-focused code review. Use when user asks to "review for security", "audit code", or "check for vulnerabilities".
```

## Troubleshooting

### Skill not appearing in `/skills` list:
- Verify folder is in `.agents/skills/`
- Check that `name` field matches folder name exactly
- Ensure SKILL.md has proper frontmatter with `---` delimiters

### Skill not activating when expected:
- Improve `description` to include more trigger keywords
- Add specific "When to Use" triggers in the body
- Make description more specific about the use case

### Skill activating incorrectly:
- Narrow the `description` to be more specific
- Remove generic terms that match too broadly
- Add compatibility requirements if needed

## Resources

- Specification: https://agentskills.io/specification
- Quickstart: https://agentskills.io/skill-creation/quickstart
- Best Practices: https://agentskills.io/skill-creation/best-practices
- Example Skills: https://github.com/anthropics/skills
