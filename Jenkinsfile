pipeline {
    agent any

    environment {
        BASE_URL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
        DEMO_USERNAME = 'Admin'
        PASSWORD = 'admin123'
    }

    stages {

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install' 
            }
        }

        stage('Run Tests') {
            steps {
                 bat 'npx playwright test --project=chrome'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
            archiveArtifacts artifacts: 'test-results/**', allowEmptyArchive: true
        }
    }
}