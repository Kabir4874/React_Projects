#include <iostream>
#include <vector>
#include <queue>
#include <set>
using namespace std;

bool isValidMove(const vector<vector<int>> &matrix, int row, int col)
{
    int rows = matrix.size();
    int cols = matrix[0].size();
    return row >= 0 && row < rows && col >= 0 && col < cols && matrix[row][col] != -1;
}

int minTimeToEscape(const vector<vector<int>> &matrix)
{
    if (matrix.empty() || matrix[0].empty())
        return -1;

    int rows = matrix.size();
    int cols = matrix[0].size();

    pair<int, int> start = {-1, -1};
    pair<int, int> end = {-1, -1};

    for (int i = 0; i < rows; ++i)
    {
        for (int j = 0; j < cols; ++j)
        {
            if (matrix[i][j] == -1)
                start = {i, j};
            else if (matrix[i][j] == -2)
                end = {i, j};
        }
    }

    if (start == make_pair(-1, -1) || end == make_pair(-1, -1))
        return -1;

    vector<pair<int, int>> directions = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}, {1, 1}, {-1, -1}, {1, -1}, {-1, 1}};

    queue<pair<pair<int, int>, int>> q;
    set<pair<int, int>> visited;

    q.push({start, 0});
    visited.insert(start);

    while (!q.empty())
    {
        pair<pair<int, int>, int> current = q.front();
        q.pop();
        int time = current.second;
        pair<int, int> currentPosition = current.first;

        if (currentPosition == end)
            return time;

        for (const auto &direction : directions)
        {
            int newRow = currentPosition.first + direction.first;
            int newCol = currentPosition.second + direction.second;
            if (isValidMove(matrix, newRow, newCol) && visited.find({newRow, newCol}) == visited.end())
            {
                q.push({{newRow, newCol}, time + matrix[newRow][newCol]});
                visited.insert({newRow, newCol});
            }
        }
    }

    return -1; // Impossible to escape
}

int main()
{
    vector<vector<int>> jungleMatrix = {
        {1, 0, 0, 4, 5, 6},
        {6, 5, 4, 0, 2, 1},
        {5, 1, 0, 0, 6, 3},
        {1, 2, 5, 8, -2, 6},
        {9, 8, 0, -1, 5, 6}

    };

    int minTime = minTimeToEscape(jungleMatrix);
    if (minTime <= -1)
    {
        cout << "Impossible" << endl;
    }
    else
    {
        cout << "Minimum time to escape: " << minTime << endl;
    }

    return 0;
}
