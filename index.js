const core = require('@actions/core');

try {
    const branchNamesInput = core.getInput('branch-names');
    const variableValuesInput = core.getInput('variable-values');
    const envVariableName = core.getInput('env-variable-name');
    const branchNames = branchNamesInput.split(',');
    const variableValues = variableValuesInput.split(',');

    if (branchNames.length !== variableValues.length) {
        throw new Error('Number of branch names and variable values must be equal.');
    }

    const branchName = process.env.GITHUB_REF.split('/').slice(-1)[0];
    let environmentVariable;
    const index = branchNames.indexOf(branchName);
    if (index >= 0) {
        environmentVariable = envVariableName;
        const variableValue = variableValues[index];
        core.exportVariable(environmentVariable, variableValue);
        core.setOutput('environment-variable', environmentVariable);
    } else {
        throw new Error(`Branch '${branchName}' not found in the list of supported branches.`);
    }
} catch (error) {
    core.setFailed(error.message);
}
