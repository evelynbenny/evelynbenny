{
    {const { defineConfig } = require('cypress')

    module.exports = defineConfig({
      reporter: 'junit',
      reporterOptions: {
        reporter: 'cypress-multi-reporters',
        reporterOptions: {
        configFile: 'reporter-config.json',
        mochaFile: 'results/my-test-output.xml',
        toConsole: true,
        mochaFile: 'results/my-test-output-[hash].xml',
        reportDir: 'cypress/results',
        overwrite: false,
        html: true,
        json: true,
        xml:true
      }
    }
      })
}
}