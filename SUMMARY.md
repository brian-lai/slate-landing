# Slate Beaver: AI-Assisted Planning-to-Execution IDE

## What is Slate Beaver?

Slate Beaver is a **planning-to-execution IDE** that bridges structured human planning and AI-powered building. It uses a familiar project management interface (hierarchical tickets in a kanban board) as the primary way to plan, organize, and execute work—not just for software development, but for building *anything*.

## Core Concept

Traditional IDEs are built for *writing code*. Slate Beaver is built for **planning and building with AI assistance**.

- **Plan**: Break down work into hierarchical tickets (Projects → Areas → Tasks → Subtasks)
- **Review**: Human-guided review and refinement of AI-generated plans
- **Update**: Iterative improvement of the plan structure
- **Execute**: AI executes tasks based on structured plans
- **Context Export**: Export planning hierarchies in AI-ready formats (JSON, Claude Context, Markdown)

## Inspiration: PARA-Programming

Slate Beaver embodies the **PARA-Programming methodology** that we're using to build it:

- **Human-AI Collaboration**: Humans provide strategic direction, AI handles execution
- **Structured Context**: Hierarchical planning provides clear context for AI assistance
- **Iterative Workflow**: Plan → Review → Execute → Summarize
- **Persistent Memory**: Planning structure serves as project memory across sessions

## Beyond Software Development

While the first use case is **software development**, the architecture supports any domain that benefits from:

- Hierarchical planning (breaking down complex goals)
- Collaborative human-AI work
- Structured context for AI assistance
- Project management workflows

**Future use cases could include:**
- Research projects
- Content creation
- Product design
- Strategic planning
- Event planning
- Curriculum development

## Current State (Phase 2.5)

**✅ Complete:**
- Full CRUD REST API (Go + Huma v2 + PostgreSQL)
- React frontend with kanban board interface
- Hierarchical cards (4 levels deep: L0 → L1 → L2 → L3)
- Multi-format export (JSON, Claude Context, Markdown)
- User authentication (JWT-based)
- MCP server for Claude Code integration
- Docker orchestration

**Architecture:**
- **Backend**: Go 1.24, Huma v2 (OpenAPI-first), Chi Router, PostgreSQL
- **Frontend**: React 18, TypeScript, Vite, TailwindCSS v4, TanStack Query
- **Integration**: Model Context Protocol (MCP) server for AI assistant access

## The Vision

Slate Beaver aims to be the **default interface for AI-assisted building**:

1. **Planning Interface**: Hierarchical tickets replace traditional IDEs as the primary interface
2. **AI-Ready**: Export structured context optimized for LLM consumption
3. **Human-Guided**: Humans plan and review; AI executes and suggests
4. **Universal**: Applicable to any domain requiring planning and execution
5. **Persistent**: Project structure provides memory across AI sessions

## Development Approach

We're building Slate Beaver **using Slate Beaver**:

- Planning work in hierarchical tickets
- Exporting context for AI assistance (Claude Code)
- Following PARA-Programming workflow
- Dogfooding our own methodology

---

**Project Status**: Active development (Phase 2.5 complete - Authentication + Backend Refactoring)
**License**: TBD
**Repository**: `slate-beaver/`
