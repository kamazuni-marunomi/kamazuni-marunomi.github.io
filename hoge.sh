git filter-branch --force --env-filter '
        # GIT_AUTHOR_EMAILの書き換え
        if [ "$GIT_AUTHOR_EMAIL" = "torinoko@users.noreply.github.com" ];
        then
                GIT_AUTHOR_EMAIL="3615622+torinoko@users.noreply.github.com";
        fi
        # GIT_COMMITTER_EMAILの書き換え
        if [ "$GIT_COMMITTER_EMAIL" = "torinoko@users.noreply.github.com" ];
        then
                GIT_COMMITTER_EMAIL="3615622+torinoko@users.noreply.github.com";
        fi
        ' -- --all
