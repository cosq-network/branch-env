# Set Environment Variable GitHub Action for Branch

This GitHub Action sets an environment variable based on the branch name and a predefined mapping of branches to variable values. It allows you to dynamically set different environment variables depending on the branch being processed in your workflow.

## Usage

### Inputs

- `branch-names` (required): Comma-separated list of branch names.
- `variable-values` (required): Comma-separated list of corresponding values for the branches.
- `env-variable-name` (required): Name of the environment variable to be set.

### Example Workflow

```yaml
name: Set Environment Variable

on:
  push:
    branches:
      - main
      - development
      # Add more branches as needed

jobs:
  set_env:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Set environment variable
        uses: cosq-network/branch-env@v1.0.0
        with:
          branch-names: main,development
          variable-values: main-value,dev-value
          env-variable-name: MY_ENV_VARIABLE  # Replace with your desired environment variable name
```

### Example Mapping

In this example, we set two branches: `main` and `development`. For each branch, we provide the corresponding variable value. You can add more branches and their respective values as needed.

### Limitations

Please note that this action is designed to work with simple branch-to-variable mappings. If you require more complex logic or additional configurations, consider customizing the action code to suit your specific needs.

## License

This GitHub Action is licensed under the [ISC License](LICENSE).

## Contributions

Contributions to this GitHub Action are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## Credits

This action was created by [Benoy Bose](https://github.com/cosq-network).