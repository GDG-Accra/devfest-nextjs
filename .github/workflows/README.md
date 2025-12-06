# GitHub Actions Workflows

This directory contains GitHub Actions workflows for CI/CD.

## Workflows

### 1. `build.yml` - Build Verification

Runs on every push and pull request to `main` and `develop` branches.

**What it does:**

- Installs dependencies with pnpm
- Runs ESLint
- Type checks with TypeScript
- Builds the Next.js application
- Builds and verifies the Docker image

**Purpose:** Ensures code quality and that the application builds successfully before merging.

### 2. `deploy.yml` - Deploy to Dokploy

Deploys to Dokploy by verifying the build and triggering a webhook. Dokploy will handle the Docker build and deployment.

**Triggers:**

- Pull request to `main` branch
- Manual trigger via `workflow_dispatch`

**What it does:**

- Runs build verification (lint, type check, build)
- Triggers Dokploy deployment via webhook
- Dokploy builds the Docker image and deploys

**Required Secrets:**

- `DOKPLOY_WEBHOOK_URL` - Your Dokploy webhook URL (e.g., `https://manage.sosualfred.com/api/deploy/...`)
