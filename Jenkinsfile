pipeline {
    agent any

    environment {
        CI = 'true'
    }

    stages {

        stage('Install') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Playwright') {
            steps {
                bat 'npx playwright install --with-deps'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npx playwright test'
            }
        }
    }
withEnv([
  "BASE_URL=https://opensource-demo.orangehrmlive.com"
]) {
    bat 'npx playwright test'
}
    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**/*', allowEmptyArchive: true
        }
    }
}